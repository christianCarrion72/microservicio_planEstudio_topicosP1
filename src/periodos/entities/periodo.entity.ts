import { Gestion } from "src/gestions/entities/gestion.entity";
import { GrupoMateria } from "src/grupo_materias/entities/grupo_materia.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, UpdateDateColumn } from "typeorm";

@Entity()
export class Periodo {

    @Column({ primary: true, generated: true})
    id: number;

    @Column()
    numero: number;

    @ManyToOne(() => GrupoMateria, (grupo_materia) => grupo_materia.id, { eager: true, nullable: true })
    idGrupoMateria: GrupoMateria;

    @ManyToOne(() => Gestion, (gestion) => gestion.id, { eager: true, nullable: true } )
    idGestion: Gestion;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
