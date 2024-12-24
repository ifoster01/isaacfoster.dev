export function Contact() {
  return (
    <section className="py-16 sm:py-20 bg-card" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <a 
          href="mailto:ifoster01@gmail.com"
          className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}