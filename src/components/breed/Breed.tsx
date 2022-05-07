import { useEffect, useState } from "react";
import { BreedContainer, StyledBreedImage, StyledBreedName } from './styles';
import formatBreedName from "../../helpers/formatName";
import { Link } from "react-router-dom";

type Props = {
    breedName: string;
};

export default function Breed( {breedName}: Props ) {

    const [breedImage, setBreedImage] = useState('');

    useEffect(() => {
        const fetchBreedImage = () => {

            breedName = breedName.replace('-', '/');

            fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then(data => data.json())
            .then(jsonData => setBreedImage(jsonData.message))
        } 

        fetchBreedImage();
    }, [])

    return(
        <Link to={breedName}>
            <BreedContainer>
                <StyledBreedImage src={breedImage} />
                <StyledBreedName>{formatBreedName(breedName)}</StyledBreedName>
            </BreedContainer>
        </Link>
    )
}