import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Adress')
class Adress {

@PrimaryGeneratedColumn()
id: string

@Column()
adress: string

@Column()
number: number

@Column()
complement: string

@Column()
cep: string

@Column()
city: string

@Column()
state: string

}

export default Adress