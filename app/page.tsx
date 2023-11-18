import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Home() {
	return (
		<section className="flex flex-col  gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg">
				<h1 className={title()}>Make&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
				<br />
				<h1 className={title()}>

					resume or homepage
				</h1>
			</div>

			<div className="flex gap-3">
				<Button as={Link} href="/dashboard" size="lg" color="primary">GET START</Button>
				<Button color="primary" variant="bordered" size="lg">
					View List
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>


				</Button>

			</div>
		</section>
	);
}
