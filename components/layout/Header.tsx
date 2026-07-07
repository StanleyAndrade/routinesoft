import Link from "next/link";

export default function Header() {
	return (
		<header className="w-full border-b border-black/10 bg-white">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
				<Link href="/" className="text-xl font-bold tracking-tight text-black">
					RoutineSoft
				</Link>

				<nav aria-label="Menu principal">
					<ul className="flex flex-col gap-2 text-sm font-medium sm:flex-row sm:items-center sm:gap-6">
						<li>
							<Link href="/" className="text-black transition-opacity hover:opacity-70">
								Inicio
							</Link>
						</li>
						<li>
							<Link
								href="/blog"
								className="text-black transition-opacity hover:opacity-70"
							>
								Blog
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
