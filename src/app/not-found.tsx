import Link from "next/link";

export default function NotFound() {
    return(
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="flex flex-col gap-2 items-end">
                <h1 className="font-roboto font-bold text-4xl">Página não encontrada! :(</h1>
                <Link className="font-roboto text-base" href="/">Home</Link>
            </div>
        </div>
    );
}