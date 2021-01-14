import React, { useEffect, useState } from "react";
import axios from "axios";
import AddCompany from "./AddCompany";
import DetailCompany from "./DetailCompany";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

const App = () => {
  const $ = window.jQuery;
  const history = useHistory();
  const [company, setCompany] = useState({});
  const [companies, setCompanies] = useState([]);
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
  } = useForm();
  const {
    register: register3,
    errors: errors3,
    handleSubmit: handleSubmit3,
    reset: reset3,
  } = useForm({
    resolver: yupResolver(schema),
  });
  axios.defaults.headers.common['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  useEffect(() => {
    axios
      .get(`https://murmuring-sands-94522.herokuapp.com/http://avaliacao.conecti.com.br/front/api/clients`)
      .then((res) => {
        setCompanies(res.data);
      });
  }, []);

  const onSubmit = (data) => {
    axios
      .get(`https://murmuring-sands-94522.herokuapp.com/http://avaliacao.conecti.com.br/front/api/clients`)
      .then((res) => {
        data["id"] = uuidv4();
        let newCompanies = [...companies, data];

        setCompanies(newCompanies);
        reset();

        $("#addCompanyModal").modal("toggle");
        Swal.fire({
          title: "Sucesso!",
          text: "Empresa Adicionada com Sucesso!",
          icon: "success",
          timer: 1500,
        });
      });
  };

  const onSearchSubmit = (params) => {
    axios
      .get(
        `https://cors-
        anywhere.herokuapp.com/http://avaliacao.conecti.com.br/front/api/clients?text=` + params.text
      )
      .then((res) => {
        setCompanies(res.data);
        history.push(`?text=${params.text}`);
      });
  };

  const onDeleteSubmit = (id) => {
    
    const companyIndex = companies.findIndex((x) => x.id === id);
    companies.splice(companyIndex, 1);
    reset3();
    $("#detailCompanyModal").modal("toggle");
    Swal.fire({
      title: "Sucesso!",
      text: "Empresa Deletada com Sucesso!",
      icon: "success",
      timer: 1500,
    });
  }

  const onUpdateSubmit = (data) => {
    const { id, name, email, cnpj } = data;
    const companyIndex = companies.findIndex((x) => x.id === id);
    companies[companyIndex].name = name;
    companies[companyIndex].email = email;
    companies[companyIndex].cnpj = cnpj;
    reset3();
    $("#detailCompanyModal").modal("toggle");
    Swal.fire({
      title: "Sucesso!",
      text: "Empresa Modificada com Sucesso!",
      icon: "success",
      timer: 1500,
    });
  };

  const onDetailCompany = (id) => {
    axios
      .get(`https://murmuring-sands-94522.herokuapp.com/http://avaliacao.conecti.com.br/front/api/clients?id=` + id)
      .then((res) => {
        const companyRes = companies.find((obj) => obj.id === id);
        setCompany(companyRes);
      });
  };

  return (
    <>
      <AddCompany
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      <DetailCompany
        onSubmit={handleSubmit3(onUpdateSubmit)}
        register={register3}
        handleSubmit={handleSubmit3}
        handleDelete={onDeleteSubmit}
        errors={errors3}
        company={company}
      />

      <form
        onSubmit={handleSubmit2(onSearchSubmit)}
        className="d-none d-sm-inline-block form-inline mr-auto my-3 mw-100 navbar-search"
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-gray border-0 small"
            placeholder="Procurar..."
            name="text"
            ref={register2({ required: true })}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
        {errors2.text && <small>Digite o termo para pesquisa</small>}
      </form>
      <div
        className="card mb-4 text-center p-2"
        data-toggle="modal"
        data-target="#addCompanyModal"
      >
        Adicionar empresa
      </div>

      {companies.length === 0 ? (
        <p className="text-center">Não foram encontrados resultados.</p>
      ) : (
        companies.map((company, index) => {
          return (
            <div
              key={index}
              className="card shadow mb-2 pl-4 pt-3"
              data-toggle="modal"
              onClick={() => onDetailCompany(company.id)}
              data-target="#detailCompanyModal"
            >
              <strong style={{ color: "#53758B" }}>{company.name}</strong>
              <p>
                CNPJ: {company.cnpj} | e-mail: {company.email}
              </p>
            </div>
          );
        })
      )}
    </>
  );
};

export default App;
