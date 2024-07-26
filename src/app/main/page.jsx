import { useSelector } from "react-redux";
import PageTransition from "../_components/PageTransition"

export default async function MainPage() {
  const promise = await fetch(`${process.env.REACT_APP_BASE_URL}/dummy/menu.json`);
  const response = await promise.json();

  console.log(response);
  return (
    <PageTransition>
      <div>
        234i234782348237949
      </div>
    </PageTransition>
  )
}
