import NavBar from "../components/NavBar";
import React from 'react'

export default function About() {
  return (
    <>
      <NavBar />
      <div className="about">
        <h2>About FlixFinder 🍿</h2>
          <p>FlixFinder was created as part of my final project for the <strong>Techtonica</strong> program, and it’s designed to help users discover movies they’ll enjoy, without the usual stress of scrolling through endless streaming options. The idea behind FlixFinder is simple: let’s take the guesswork out of picking what to watch after a long workday. By giving users personalized movie recommendations based on their favorite genres and interests, FlixFinder simplifies the process, offering fresh ideas that match your tastes.</p>
        <h3>The Journey Behind the Project</h3>
          <p>Building FlixFinder has been an exciting, challenging, and incredibly rewarding experience. As someone new to developing with more complex technologies, the hardest part of the project was diving into AI integration and API handling. Learning how to work with external APIs, like the Streaming Availability API and GPT Summarization, required a lot of trial and error. The documentation was often my best friend as I navigated through the intricacies of authentication, data fetching, and error handling. In the end, it was all worth it to see the features come together. Though it was tough, solving these problems felt rewarding, especially when the app finally started working as intended.</p>
        <h3>The Fun Part</h3>
        <p>What kept me motivated throughout the project was the creative freedom and the sense of progress as I built FlixFinder from scratch. It was incredibly fun to design a responsive interface using React and React Bootstrap, and to implement features like user genre selection and random movie generation. Watching it all come to life, especially when users could actually get AI-generated summaries of movie reviews, was thrilling. One of the most enjoyable parts was seeing the project evolve as I thought of new ideas to enhance its functionality. From possibly implementing comments on reviews to improving the user authentication process with Auth0, there are so many possibilities for where I could take FlixFinder next. And that’s one of the things I love about this project: the potential for future development feels endless. It’s exciting to imagine how I could continue adding new features and polishing existing ones as I keep learning and growing as a developer.</p>
      <h3>What’s Next?</h3>
        <p>As with any project, there’s always room for improvement and expansion. For now, FlixFinder offers a simple, effective way for users to discover movies they love. But in the future, I plan to: </p>
          <ul>
            <li>Add more personalized features, like saving movies to a “Favorites” or “Watched” list</li>
            <li>Allow users to comment on each other's reviews, fostering a community of movie lovers.
            </li>
            <li>Improve the overall authentication process with tools like Auth0 to provide a smoother user experience.</li>
          </ul>
        <p>While this project has already taught me so much, I can’t wait to continue developing it and seeing where it goes!</p>
      <h3>Acknowledgments</h3>
        <p>This project wouldn’t have been possible without the <strong>Techtonica</strong> program, which provided the learning environment and resources to help me tackle challenges and build something I’m truly proud of. Thank you to everyone who has supported me through this journey, including my mentor, cohort members, and the open-source community who have shared their knowledge and made this project possible.</p>
        <p>If you’re interested in contributing to FlixFinder, whether through feature ideas, bug fixes, or enhancements, feel free to open an issue or submit a pull request on<a href="https://github.com/stmcpeters/FlixFinder">GitHub.</a>Contributions are always welcome!</p>
        <p>Thank you for checking out FlixFinder! Happy movie hunting! 🎬 </p>
    </div>
  </>
  )
}
