export interface HeaderProps {
      texto: string;
}

export default function Header(props: HeaderProps) {
      return (
            <div className="text-center">
                  <h1 className="text-3xl text-text my-5">{props.texto}</h1>
            </div>
      );
}
