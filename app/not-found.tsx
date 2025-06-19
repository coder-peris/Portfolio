import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='inset-0 fixed z-50 h-screen w-screen bg-background flex flex-col justify-evenly items-center'>
			<section className='flex flex-col justify-center items-center'>
				<h1>404 - Page Not Found</h1>
				<p>Sorry, the page you are looking for does not exist.</p>
			</section>
			<Link href="/" className='text-blue-400 hover:underline hover:font-bold transition-colors duration-300'>
				Go back to homepage.
			</Link>
		</div>
	);
};