import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Newspaper } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { blogPosts, getBlogPost } from "../posts";

type BlogDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => blogPosts.map((post) => ({ slug: post.slug }));

export async function generateMetadata({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {};
    }

    return {
        title: `${post.title} | AIPurview`,
        description: post.excerpt,
    };
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="border-b border-card-border pt-36 pb-16">
                <div className="container mx-auto px-6">
                    <Link href="/blog" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-neon-blue">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Articles
                    </Link>
                    <div className="max-w-4xl">
                        <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-foreground/40">
                            <Newspaper className="h-4 w-4 text-neon-blue" />
                            <span>{post.date}</span>
                            <span>No Comments</span>
                        </div>
                        <h1 className="mb-8 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
                            {post.title}
                        </h1>
                        <p className="text-xl leading-relaxed text-foreground/65">{post.excerpt}</p>
                    </div>
                </div>
            </section>

            <Section>
                <article className="mx-auto max-w-4xl">
                    <div className="mb-12 aspect-[16/9] overflow-hidden rounded-md bg-foreground/5">
                        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                    </div>
                    <div className="space-y-6 text-lg leading-relaxed text-foreground/70">
                        {post.content.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </article>
            </Section>

            <Footer />
        </main>
    );
};

export default BlogDetailPage;
