import { cn } from "@/lib/utils";
import Marquee from "./magicui/marquee";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "./ui/accordion"
import Link from "next/link";
import Image from "next/image";

const FeedbackAndFAQ = () => {
    const reviews = [
        {
            name: "Jack",
            username: "@jack",
            body: "I've never seen anything like this before. It's amazing. I love it.",
            img: "https://avatar.vercel.sh/jack",
          },
          {
            name: "Jill",
            username: "@jill",
            body: "I don't know what to say. I'm speechless. This is amazing.",
            img: "https://avatar.vercel.sh/jill",
          },
          {
            name: "John",
            username: "@john",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/john",
          },
          {
            name: "Jane",
            username: "@jane",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jane",
          },
          {
            name: "Jenny",
            username: "@jenny",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jenny",
          },
          {
            name: "James",
            username: "@james",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/james",
          },
    ];
    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);
    
    const ReviewCard = ({
        img,
        name,
        username,
        body,
      }: {
        img: string;
        name: string;
        username: string;
        body: string;
      }) => {
        return (
          <figure
            className={cn(
              "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
              // light styles
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              // dark styles
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <Image className="rounded-full" width="32" height="32" alt="" src={img} />
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {name}
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">{username}</p>
              </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
          </figure>
        );
      };

    const faqs = [
        {
            question: "How do I create an account on the platform?",
            answer: "To create an account, click on the “Sign Up” button on the homepage. You can register as a student, alumni, or college administrator. Follow the prompts to enter your details and verify your email address to complete the registration process",
        },
        {
            question: "How can I apply?",
            answer: "You can apply through our online application portal. Visit our admissions page for more details.",
        },
        {
            question: "What are the tuition fees?",
            answer: "Tuition fees vary by program. Please visit our tuition and fees page for detailed information.",
        },
        {
            question: "What are the tuition fees?",
            answer: "Tuition fees vary by program. Please visit our tuition and fees page for detailed information.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto py-16 px-8 ">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
                {/* User Feedbacks Section */}
                <div className="md:w-1/2 w-full mb-8 md:mb-0 pr-0 md:pr-8">
                    <h2 className="text-2xl md:text-3xl text-center md:text-start font-bold mb-4 text-primaryBlue">User Feedbacks</h2>
                    
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>

      <div className="mb-8 mt-4">
        <Link href="/login" className="text-primaryBlue hover:text-gray-400 block text-center font-semibold">Leave your Review </Link>
      </div>
    </div>



                </div>

                {/* FAQ Section */}
                <div className="md:w-1/2 w-full pl-8">
                    <h2 className="text-2xl md:text-3xl text-center md:text-start font-bold mb-4 text-primaryBlue">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <Accordion key={index} type="single" collapsible>
                            <AccordionItem value="item-1">
                              <AccordionTrigger>{faq.question}</AccordionTrigger>
                              <AccordionContent>
                              {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackAndFAQ;

