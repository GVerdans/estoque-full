export default function NavBar() {
      return (
            <header className="flex h-16 items-center justify-between border-b border-accent px-6">
                  <h1 className="text-xl font-bold text-accent">Estoque</h1>
                  <nav>
                        <ul className="flex gap-4">
                              <li className="cursor-pointer hover:text-highlight">
                                    Produtos
                              </li>

                              <li className="cursor-pointer hover:text-highlight">
                                    Funcionários
                              </li>
                        </ul>
                  </nav>
            </header>
      );
}
