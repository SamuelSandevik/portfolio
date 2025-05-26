
const Footer = () => {
  return (
   
    <footer className="dark:bg-slate-900 bg-slate-200 dark:text-slate-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Samuel Sandevik. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/SamuelSandevik" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/samuel-sandevik-356b55279/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="mailto:samuel.sandevik@outlook.com" className="hover:text-white transition">
            Email
          </a>
        </div>
      </div>
  </footer>
  )
}

export default Footer