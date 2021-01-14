import React from "react";


const AddCompany = (props) => {
    

  return (
    <div
      className="modal fade"
      id="addCompanyModal"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">
              Adicionar Empresa
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="modal-body">
            <div className="form-group">
                <label htmlFor="name">Nome da Empresa</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  ref={props.register}
                  placeholder="Digite o nome da Empresa"
                />
                 <small className="text-danger">{props.errors.name && 'O nome da empresa é obrigatório.'}</small>
              </div>
              <div className="form-group">
                <label htmlFor="CNPJ">CNPJ</label>
                <input
                  type="text"
                  className="form-control"
                  id="cnpj"
                  name="cnpj"
                  ref={props.register}
                  placeholder="Digite o CNPJ"
                />
                <small className="text-danger">{props.errors.cnpj && 'O CNPJ é obrigatório. (Somente números)'}</small>
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  ref={props.register}
                  placeholder="Digite o email"
                />
                <small className="text-danger">{props.errors.email && 'O email é obrigatório.'}</small>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-success" disabled={Object.keys(props.errors).length > 0}>
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCompany;
