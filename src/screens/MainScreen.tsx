import { DogSelection } from "../components/ui/DogSelection";
import { Header } from "../components/ui/Header";
import { RandomDog } from "../components/ui/RandomDog";


export const MainScreen = () => {
    return (

    <div>
        <Header></Header>
        <RandomDog></RandomDog>
        <DogSelection></DogSelection>
    </div>
    );
};