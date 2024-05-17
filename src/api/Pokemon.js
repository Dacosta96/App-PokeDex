import { API_HOST } from "./../utils/constants";

export async function getPokemonsApi(endPonintUrl) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`; // especifica parametros de petición
    const response = await fetch(endPonintUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
