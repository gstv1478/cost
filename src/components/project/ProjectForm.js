import Input from '../form/Input'
import Select from '../form/Select'
import styles from './ProjectForm.module.css'

function ProjectForm() {
    return(
        <form className={styles.form}>
            <Input 
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
           />
           <Input 
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
           />
            
            <Select name="category_id" text="Selecione uma categoria"/>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    )
}

export default ProjectForm