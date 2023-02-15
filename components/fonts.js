import { Global } from "@emotion/react"

// what the hell do you do with all these CSS in js files??!? 

const Fonts = () => (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
    `}</style>
  )
  export default Fonts