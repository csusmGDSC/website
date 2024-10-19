import ContentCard, { ContentProps } from "@/components/ui/cards/content-card";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const mockData: ContentProps[] = [
    {
      title: "Open Source Workshop",
      description: "Join us for a hands-on workshop on open source contributions.",
      websiteUrl: "https://example.com/open-source-workshop",
      githubUrl: "https://github.com/example/open-source-workshop",
      imageSrc: "https://example.com/images/workshop.jpg",
      className: "event",
      date: "2024-11-05",
      tags: ["open source", "workshop", "community"],
      type: "event",
      eventType: "workshop"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my projects and skills asdfasfadsfsadfasdfasfsadfasdfasfasf asdfasf.",
      websiteUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/example/portfolio",
      imageSrc: "https://example.com/images/portfolio.jpg",
      className: "project",
      date: "2024-10-15",
      tags: ["portfolio", "web development"],
      type: "project",
      eventType: "workshop"
    },
    {
      title: "Tech Conference 2024",
      description: "An annual conference bringing together tech enthusiasts asdfasf asf.",
      websiteUrl: "https://example.com/tech-conference",
      githubUrl: "https://example.com/tech-conference",
      imageSrc: "https://example.com/images/conference.jpg",
      className: "event",
      date: "2024-12-01",
      tags: ["conference", "technology", "networking"],
      type: "event",
      eventType: "workshop"
    },
    {
      title: "AI Chatbot",
      description: "A chatbot powered by AI for customer service.",
      websiteUrl: "https://example.com/ai-chatbot",
      githubUrl: "https://github.com/example/ai-chatbot",
      imageSrc: "https://example.com/images/chatbot.jpg",
      className: "project",
      date: "2024-09-20",
      tags: ["AI", "chatbot", "project"],
      type: "project",
      eventType: "workshop"
    },
    {
      title: "Community Clean-Up Day",
      description: "A day dedicated to cleaning up our local parks.",
      websiteUrl: "https://example.com/cleanup",
      githubUrl: "",
      imageSrc: "https://example.com/images/cleanup.jpg",
      className: "event",
      date: "2024-10-30",
      tags: ["community", "environment", "volunteering"],
      type: "event",
      eventType: "workshop"
    }
  ];

describe('This tests the content-card component by checking if text is within frame.', () => {
    it('Check if text exists', () => {
        for(const data of mockData) {
            render(<ContentCard
                title={data.title}
                description={data.description}
                tags={data.tags}
                date={data.date}
                type={data.type}
                eventType={data.eventType}
                githubUrl={data.githubUrl}
                websiteUrl={data.websiteUrl}
            />)

            const titleExists = screen.getByText(data.title || "")
            const descriptionExists = screen.getByText(data.description || "")
            const dateExists = screen.getByText(data.date || "")
            
            expect(titleExists).toBeInTheDocument()
            expect(descriptionExists).toBeInTheDocument()
            expect(dateExists).toBeInTheDocument()
        }
    })
})