import { Edit, SimpleForm, TextInput, SelectInput, EditProps, DateInput, ImageField, ImageInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

const PetEdit = (props: EditProps) => {
	return (
		<Edit {...props}>
			<SimpleForm>
				<TextInput source="name" label="Имя" />
				<TextInput source="breed" label="Порода" />
				<SelectInput source="gender" label="Пол" choices={[
					{ id: 'male', name: 'Мужской' },
					{ id: 'female', name: 'Женский' },
				]} />
				<DateInput source="birthdate" label="Дата рождения" />
				<SelectInput source="type" label="Тип" choices={[
					{ id: 'dog', name: 'Собака' },
					{ id: 'cat', name: 'Кот' },
				]} />
				<TextInput source="description" label="Описание" />

				<RichTextInput 
					toolbar={[]} 
					source="about" 
					label="О питомце" 
					helperText="Полное описание питомца" 
					fullWidth 
					format={(about: string[]) => 
						Array.isArray(about) ? about.map(paragraph => `<p>${paragraph}</p>`).join('') : about
					}					
					parse={(about: string) => 
                        about ? about.split(/<\/p>\s*<p>/).map((str) => str.replace(/<\/?p>/g, '')) : []
                    }
					/>

				<ImageInput
					readOnly={true}
					source="images_url"
					label=" "
					placeholder="Удалите старые фотографии, если требуется."
				>
					<ImageField source="secure_url" title="display_name" />
				</ImageInput>

				<ImageInput
					source="images_url"
					label="Загрузить новые фотографии"
					accept={{ 'image/*': ['.jpg', '.jpeg', '.png', '.jfif'] }}
					placeholder="Нажмите, чтобы загрузить новые фотографии или перетащите несколько."
					multiple
				>
					<ImageField source="src" title="title" />
				</ImageInput>

			</SimpleForm>
		</Edit>
	)
};

export default PetEdit;
