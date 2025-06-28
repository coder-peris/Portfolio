import Image from "next/image";
import type { FC, ReactNode } from "react";

const About: FC = (): ReactNode => {
	return (
		<section id="about" className="scroll-mt-12 w-full pb-16 pt-5 px-6">
			<div className="space-y-6 text-center mb-8">
				<h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
				<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
					I&apos;m a dedicated computer engineer with full-stack web development experience, specializing in creating fast, accessible, and maintainable web applications. I thrive on building clean UIs, writing efficient backend logic, and continuously learning to keep up with evolving tech trends.
				</p>
			</div>
			<div className="mx-auto grid max-w-5xl items-center gap-8 py-12 md:grid-cols-2">
				<div className="flex flex-col justify-center space-y-12">
					<article>
						<h3 className="text-xl font-bold mb-2">Education</h3>
						<ul className="space-y-3">
							<li>
								<p className="font-medium">
									Advanced College of Engineering & Management, IOE, TU
								</p>
								<p className="text-muted-foreground">
									Bachelor in Computer Engineering <em>(2019-2024)</em>
								</p>
							</li>
							<li>
								<p className="font-medium">Tulsi Boarding Secondary School, Tulsipur, Dang</p>
								<p className="text-muted-foreground">Secondary School Examination, <em>2017</em></p>
							</li>
						</ul>
					</article>

					<article>
						<h3 className="text-xl font-bold mb-2">Experience</h3>

						<ul className="space-y-3">
							<li>
								<p className="font-medium">
									Workalaya R. & D. Pvt. Ltd, Kupondole, Lalitpur
								</p>
								<p className="text-muted-foreground">
									Web Development Intern <em>(March 2025 - June 2025)</em>
								</p>
							</li>
						</ul>
					</article>
					<article>
						<h3 className="text-xl font-bold">Interests</h3>
						<p className="text-muted-foreground">
							Outside of coding, I enjoy playing chess, watching educational videos, exploring curiosities, and learning new skills.
						</p>
					</article>

				</div>
				<div className="hidden md:flex items-center justify-center">
					<div className="relative h-[300px] w-[300px]">
						<Image
							src="/coder-peris.jpg"
							alt="coder-peris"
							className="rounded-lg object-cover"
							fill
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;