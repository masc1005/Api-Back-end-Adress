import {PrimaryGeneratedColumn, Column, Entity } from  'typeorm'

export enum Etnia {
  Branco = 'Branco',
  Negro = 'Negro',
  Pardo = 'Pardo', 
  Indigena = 'Indigena',
  Amarela = 'Amarela',
  NA = 'NA'
}

@Entity('users')
class User { 

  @PrimaryGeneratedColumn()
  id: String

  @Column()
  name: String

  @Column()
  phone: String
  
  @Column()
  email: String

  @Column()
  idade: Number

  @Column()
  peso: Number

  @Column({ 
    type: "enum",
    name: 'etnia', 
    enum: Etnia,
    default: Etnia.NA
  })
  etnia: Etnia;
}

export default User