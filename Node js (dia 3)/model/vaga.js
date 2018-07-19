class Vaga{
    constructor(id, name, description, skills, area, differentials, isPcd, isActive, salary){
        this.id = id;
        this.name = name;
        this.description = description;
        this.skills = skills;
        this.area = area;
        this.differentials = differentials;
        this.isPcd = isPcd;
        this.isActive = isActive;
        this.salary = salary;
    }
}

module.exports = Vaga;