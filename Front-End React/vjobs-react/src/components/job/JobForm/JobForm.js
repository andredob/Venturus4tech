import React from 'react';

const jobForm = () =>(
    <form>
        <div className="form-row">
            <div className="form-group col-md-12">
                <label htmlFor="inputName">Nome</label>
                <input type="text" className="form-control" id="inputName"/>
            </div>
        </div>

        {/* <!--classNamee "textarea" serve para colocar quantas rows se quer adicionar a uma caixa de texto-->
        <!--Descrição-->     */}
        <div className="form-group">
            <label htmlFor="inputDescription">Descrição</label>
            <textarea className="form-control" id="inputDescription" rows="3"></textarea>
        </div>
        <div className="form-row">
            {/* <!--Habilidades--> */}
            <div className="form-group col-md-6">
                <label htmlFor="inputHabilities">Habilidades</label>
                <textarea className="form-control" id="inputHabilities" rows="3"></textarea>
            </div>
            {/* <!--Competencias--> */}
            <div className="form-group col-md-6">
                <label htmlFor="inputCompetencias">Competencias</label>
                <textarea className="form-control" id="inputCompetencias" rows="3"></textarea>
            </div>
        </div>

        <div className="form-row">
            {/* <!--Sálario Base--> */}
            <div className="form-group col-md-6">
                <label htmlFor="inputSalary">Salário Base</label>
                <input className="form-control" id="inputSalary"></input>
            </div>
            {/* <!--Área--> */}
            <div className="form-group col-md-6">
                <label htmlFor="inputArea">Área</label>
                <select id="inputArea" className="form-control">
                    <option selected>Choose...</option>
                    <option>Teste</option>
                    <option>Design</option>
                    <option>Desenvolvimento</option>
                </select>
            </div>
        </div>

        {/* <!--Check Box--> */}
        <div className="form-group">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" htmlFor="gridCheck">
                    Vaga para PDC
                </label>
            </div>
        </div>

        {/* <!--Botão Criar Vaga--> */}
        <button type="button" className="btn btn-primary mb-2">Criar Vaga</button>
    </form>
)

export default jobForm;