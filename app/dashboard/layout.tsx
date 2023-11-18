export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg ">
				{children}
			</div>
		</section>
	);
}
