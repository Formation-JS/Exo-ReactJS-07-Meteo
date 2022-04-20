import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const citySchema = yup.object({
    city: yup.string().trim().required().min(2).matches(/^[a-z\s\-]*$/i)
}).required();

const CitySearch = ({ onSearch }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(citySchema)
    });

    const onSubmit = (data) => {
        // Envoye des données
        onSearch(data.city);

        // Reset du formulaire
        reset();
    };

    console.log(errors?.city);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='city'>Nom d'une ville : </label>
                <input id='city' defaultValue='' {...register('city')} />
                {errors?.city && (
                    <span> {errors.city.message}</span>
                )}
            </div>

            <button type='submit'>Rechercher</button>
        </form>
    );
};

CitySearch.defaultProps = {
    onSearch: () => { } // NOOP
};

export default CitySearch;