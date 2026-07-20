export default function Footer() {
      return (
            <footer className="flex h-14 items-center justify-center border-t border-accent bg-secondary text-sm text-text-muted">
                  <p>
                        © {new Date().getFullYear()} Estoque System. Todos os
                        direitos reservados.
                  </p>
            </footer>
      );
}
