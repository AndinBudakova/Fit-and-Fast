import Muscle from "../assets/images/muscle.png"
import Cardio from "../assets/images/cardio.png"
import FBurn from "../assets/images/fBurn.png"
import HealthFit from "../assets/images/healthFit.png"

export const programsData = [
  {
    image:( <img src={Muscle} alt="Strength"/>),
    heading: "Strength Training",
    description:
      "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    image: ( <img src={Cardio} alt="Cardio"/>),
    heading: "Cardio Training",
    description:
      "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    image: ( <img src={FBurn} alt="FatBurning"/>),
    heading: "Fat Burning",
    description:
      "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
  {
    image: ( <img src={HealthFit} alt="HealthFitness"/>),
    heading: "Health Fitness",
    description:
      "This programs is designed for those who exercises only for their body fitness not body building.",
  },
];
