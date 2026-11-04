/**
 * Resolves static asset paths accounting for Vite's base path (e.g. GitHub Pages subpath).
 */
export function assetUrl(path: string): string {
  if (!path) return '';
  // If already absolute URL (http/https), return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = (import.meta as any).env?.BASE_URL || '/';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
