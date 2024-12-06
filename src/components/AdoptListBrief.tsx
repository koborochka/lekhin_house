import { usePet } from '../context/PetContext'
import PetCardBrief from './PetCardBrief'
import { useNavigate } from 'react-router-dom'
import IPet from '../interfaces/IPet'

export default function AdoptListBrief() {
	const { pets, isLoading } = usePet()
	const navigate = useNavigate()

	const handlePetClick = (pet: IPet) => {
		navigate(`/adopt/${pet.id}`);
	};

	return (
		<section className="brief-list wrap">
			<div className="brief-list__container">
				<h2 className='title-h2'>Возьми <span className='pink'>друга </span> из приюта</h2>
				<button className='btn btn--blue brief-list__view-all-btn' onClick={()=>{navigate('/adopt'); }}>Смотреть всех</button>
			</div>
			{isLoading ? (
				<div className='pets-section__load'>Загрузка...</div>
			) : (
				<ul className="pets-section__pets-list">
					{pets?.slice(0, 3).map(pet => (
						<li className="pets-section__pets-item" key={pet.id} onClick={() => handlePetClick(pet)}>
							<PetCardBrief petItem={pet} />
						</li>
					))}
				</ul>
			)}
		</section>
	)
}
