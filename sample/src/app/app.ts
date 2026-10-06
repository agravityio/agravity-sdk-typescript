import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AgravityPublicConfiguration, PublicSearchManagementService, SearchResult } from '@agravity/public';

const STORAGE_KEY = 'agravity-sample-settings';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private readonly config = inject(AgravityPublicConfiguration);
  private readonly searchService = inject(PublicSearchManagementService);

  protected readonly basePath = signal('');
  protected readonly apiKey = signal('');
  protected readonly searchTerm = signal('*');
  protected readonly limit = signal(10);
  protected readonly rememberSettings = signal(false);

  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly result = signal<SearchResult | null>(null);

  constructor() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const { basePath, apiKey } = JSON.parse(stored);
        this.basePath.set(basePath ?? '');
        this.apiKey.set(apiKey ?? '');
        this.rememberSettings.set(true);
      }
    } catch {
      // storage unavailable - start with empty settings
    }
  }

  protected search(): void {
    this.error.set(null);
    this.result.set(null);
    this.persistSettings();

    // The generated services read these values from the shared configuration on every request.
    this.config.basePath = this.basePath().trim().replace(/\/+$/, '');
    this.config.apiKeys = { function_key: this.apiKey().trim() };

    this.loading.set(true);
    this.searchService.httpGlobalSearch({ s: this.searchTerm(), limit: this.limit() }).subscribe({
      next: (result) => {
        this.result.set(result);
        this.loading.set(false);
      },
      error: (err: unknown) => {
        this.error.set(this.describeError(err));
        this.loading.set(false);
      }
    });
  }

  protected json(value: unknown): string {
    return JSON.stringify(value, null, 2);
  }

  private persistSettings(): void {
    try {
      if (this.rememberSettings()) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ basePath: this.basePath(), apiKey: this.apiKey() }));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore storage errors
    }
  }

  private describeError(err: unknown): string {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 0) {
        return 'No response (status 0). The URL is unreachable or the API does not allow this origin (CORS).';
      }
      const detail = typeof err.error === 'string' ? err.error : err.error?.message;
      return `HTTP ${err.status} ${err.statusText}${detail ? ': ' + detail : ''}`;
    }
    return err instanceof Error ? err.message : String(err);
  }
}
