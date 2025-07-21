import React from "react";

const blogs = [
  {
    title: "Top Tips for Working Abroad",
    image: "/images/blog1.jpg",
    excerpt:
      "Discover essential tips to prepare for your overseas job and ensure a smooth transition.",
    link: "#"
  },
  {
    title: "Visa Requirements Explained",
    image: "/images/blog2.jpg",
    excerpt:
      "Learn about the most common visa requirements for skilled and semi-skilled workers.",
    link: "#"
  },
  {
    title: "Interview Preparation Guide",
    image: "/images/blog3.jpg",
    excerpt:
      "Ace your next job interview abroad with these proven strategies and tips.",
    link: "#"
  },
  {
    title: "Top Destinations for Job Seekers",
    image: "/images/blog4.jpg",
    excerpt:
      "Explore the best countries offering high-paying jobs for skilled workers.",
    link: "#"
  },
  {
    title: "How to Write a Perfect Resume",
    image: "/images/blog5.jpg",
    excerpt:
      "Stand out from the crowd with a professional resume tailored for international jobs.",
    link: "#"
  },
  {
    title: "Benefits of Overseas Employment",
    image: "/images/blog6.jpg",
    excerpt:
      "Find out why working abroad can be the best career decision you ever make.",
    link: "#"
  },
  {
    title: "Visa Interview Success Tips",
    image: "/images/blog7.jpg",
    excerpt:
      "Nail your visa interview with confidence and secure your work permit easily.",
    link: "#"
  },
  {
    title: "Managing Finances Abroad",
    image: "/images/blog8.jpg",
    excerpt:
      "Smart ways to manage your income, savings, and remittances while working overseas.",
    link: "#"
  },
  {
    title: "Living Abroad: Cultural Tips",
    image: "/images/blog9.jpg",
    excerpt:
      "Adjust to cultural differences and thrive in your new work environment abroad.",
    link: "#"
  },
  {
    title: "Top Industries Hiring Globally",
    image: "/images/blog10.jpg",
    excerpt:
      "Check out the booming industries worldwide that are constantly hiring foreign workers.",
    link: "#"
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <div className="h-48 w-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <a
                href={blog.link}
                className="block text-center bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}