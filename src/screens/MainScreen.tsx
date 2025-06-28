import { DogSelection } from "../components/ui/DogSelection";
import { Header } from "../components/ui/Header";
import { RandomDog } from "../components/ui/RandomDog";


export const MainScreen = () => {
    return (

    <div>
        <Header></Header>
        <div className="flex flex-col gap-4.5 mt-8">
        <RandomDog></RandomDog>
        <DogSelection></DogSelection>
        </div>
    </div>
    );
};