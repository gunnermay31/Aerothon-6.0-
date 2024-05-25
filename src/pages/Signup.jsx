import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Pioneering sustainable aerospace for a safe and united world"
      description1="Achieve unparalleled accuracy with our cutting-edge, real-time navigation systems."
      description2="Stay informed with continuous, real-time updates for optimal flight planning."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
