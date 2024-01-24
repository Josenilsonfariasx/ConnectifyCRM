/**
 * @api {post} /api/clientes Cadastrar Client
 * @apiName CadastrarCliente
 * @apiGroup Client
 * @apiDescription Rota para cadastrar um novo Client.
 *
 * @apiParam {String} nome Nome completo do Client.
 * @apiParam {String} email Endereço de e-mail do Client.
 * @apiParam {String} senha Senha do Client (mínimo 8 caracteres).
 * @apiParam {String} telefone Número de telefone do Client.
 *
 * @apiSuccess {String} id ID único do Client gerado pelo sistema.
 * @apiSuccess {String} nomeCompleto Nome completo do Client.
 * @apiSuccess {String} email Endereço de e-mail do Client.
 * @apiSuccess {String} telefone Número de telefone do Client.
 *
 * @apiSuccessExample {json} Resposta de Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "9e3fbcc6-b59e-4c45-b3b0-cb01811ccb54",
 *       "nomeCompleto": "marcos",
 *       "email": "marcos@gmail.com",
 *       "telefone": "88998726934"
 *     }
 *
 * @apiErrorExample {json} Erro de Validação:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "mensagem": "Erro de validação: o campo 'senha' deve ter no mínimo 8 caracteres."
 *     }
 */

/**
 * @api {put} /client/id Atualizar Client
 * @apiName AtualizarClient
 * @apiGroup Client
 * @apiPermission isAuthenticated
 *
 * @apiParam {String} id ID único do Client.
 * @apiParam {String} [nome] Novo nome do Client.
 * @apiParam {String} [email] Novo email do Client.
 * @apiParam {String} [telefone] Novo número de telefone do Client.
 *
 * @apiSuccess {String} id ID único do Client.
 * @apiSuccess {String} nomeCompleto Nome completo do Client.
 * @apiSuccess {String} email Email do Client.
 * @apiSuccess {String} telefone Número de telefone do Client.
 * @apiSuccess {String} dataRegistro Data de registro do Client.
 *
 * @apiError (Error 404) NotFound Usuário não encontrado.
 * @apiError (Error 500) InternalServerError Falha ao atualizar o Client.
 *
 * @apiErrorExample {json} Erro 404:
 * HTTP/1.1 404 Not Found
 * {
 *    "error": "Usuário não encontrado."
 * }
 *
 * @apiErrorExample {json} Erro 500:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "error": "Falha ao atualizar o Client: Mensagem de erro específica."
 * }
 */

/**
 * @api {get} /Client Listar Clients
 * @apiName Client
 * @apiGroup Client
 * @apiPermission isAuthenticated
 *
 * @apiSuccess {String} id ID único do Client.
 * @apiSuccess {String} nomeCompleto Nome completo do Client.
 * @apiSuccess {String} email Email do Client.
 * @apiSuccess {String} telefone Número de telefone do Client.
 * @apiSuccess {String} dataRegistro Data de registro do Client.
 * @apiSuccess {Object} _count Contagem de Clients presente no banco de dados.
 * @apiSuccess {Object[]} communications Lista de outros tipos de contato associadas ao Client.
 * @apiSuccess {Object[]} contacts Lista de contatos associados ao Client.
 *
 * @apiError (Error 500) InternalServerError Falha ao obter a lista de Client.
 *
 * @apiErrorExample {json} Erro 500:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "error": "Falha ao obter a lista de Usuarios: Mensagem de erro específica."
 * }
 */

/**
 * @api {delete} /Client/id Deletar Client
 * @apiName Deletar Client
 * @apiGroup Client
 * @apiPermission isAuthenticated
 *
 * @apiParam {String} id ID único do Client a ser deletado.
 *
 * @apiSuccess {String} id ID único do Client.
 * @apiSuccess {String} nomeCompleto Nome completo do Client.
 * @apiSuccess {String} email Email do Client.
 * @apiSuccess {String} telefone Número de telefone do Client.
 * @apiSuccess {String} dataRegistro Data de registro do Client.
 *
 * @apiError (Error 404) NotFound Usuario não encontrado.
 * @apiError (Error 500) InternalServerError Falha ao deletar o usuário.
 *
 * @apiErrorExample {json} Erro 404:
 * HTTP/1.1 404 Not Found
 * {
 *    "error": "Usuário não encontrado."
 * }
 *
 * @apiErrorExample {json} Erro 500:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "error": "Falha ao deletar o usuário: Mensagem de erro específica."
 * }
 */

/**
 * @api {get} /Client/me Detalhes do Client
 * @apiName Detalhes do Client
 * @apiGroup Client
 * @apiPermission isAuthenticated
 *
 * @apiParam {String} id ID único do Client.
 *
 * @apiSuccess {String} id ID único do Client.
 * @apiSuccess {String} nomeCompleto Nome completo do Client.
 * @apiSuccess {String} email Email do Client.
 * @apiSuccess {Object[]} communications Lista de comunicações associadas ao Client.
 * @apiSuccess {Object[]} contacts Lista de contatos associados ao Client.
 * @apiSuccess {String} dataRegistro Data de registro do Client.
 * @apiSuccess {String} telefone Número de telefone do Client.
 * @apiSuccess {Object} _count Contagem de contatos e comunicações do Client.
 * @apiSuccess {Number} contacts Quantidade de contatos associados ao Client.
 * @apiSuccess {Number} communications Quantidade de comunicações associadas ao Client.
 *
 * @apiError (Error 404) NotFound Usuário não encontrado.
 * @apiError (Error 500) InternalServerError Falha ao obter detalhes do usuário.
 *
 * @apiErrorExample {json} Erro 404:
 * HTTP/1.1 404 Not Found
 * {
 *    "error": "Usuário não encontrado."
 * }
 *
 * @apiErrorExample {json} Erro 500:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "error": "Falha ao obter detalhes do usuário: Mensagem de erro específica."
 * }
 */

/**
 * @api {post} /Client/login Autenticar Client
 * @apiName Autenticar Client
 * @apiGroup Autenticação
 * @apiPermission none
 *
 * @apiParam {String} email Email do Client.
 * @apiParam {String} senha Senha do Client.
 *
 * @apiSuccess {String} id ID único do Client autenticado.
 * @apiSuccess {String} name Nome completo do Client autenticado.
 * @apiSuccess {String} email Email do Client autenticado.
 * @apiSuccess {String} telefone Número de telefone do Client autenticado.
 * @apiSuccess {String} token Token de autenticação JWT.
 *
 * @apiError (Error 401) Unauthorized Credenciais inválidas.
 * @apiError (Error 500) InternalServerError Falha ao autenticar o Client.
 *
 * @apiErrorExample {json} Erro 401:
 * HTTP/1.1 401 Unauthorized
 * {
 *    "error": "Credenciais inválidas."
 * }
 *
 * @apiErrorExample {json} Erro 500:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "error": "Falha ao autenticar o usuário: Mensagem de erro específica."
 * }
 */

/**
 * @api {post} /contact Criar Contato
 * @apiName Criar Contato do Client
 * @apiGroup Contacts
 * @apiPermission isAuthenticated
 *
 * @apiParam {String} nome Nome completo do contato.
 * @apiParam {String} email Email do contato.
 * @apiParam {String} clientId ID único do cliente associado ao contato.
 * @apiParam {String} telefone Número de telefone do contato.
 *
 * @apiSuccess {String} id ID único do contato criado.
 * @apiSuccess {String} nomeCompleto Nome completo do contato.
 * @apiSuccess {String} email Email do contato.
 * @apiSuccess {String} telefone Número de telefone do contato.
 * @apiSuccess {String} clientId ID único do cliente associado ao contato.
 * @apiSuccess {Object[]} communications Lista de comunicações associadas ao contato.
 * @apiSuccess {String} dataRegistro Data de registro do contato.
 * @apiSuccess {Object} _count Contagem de comunicações associadas ao contato.
 *
 * @apiError (Error 400) BadRequest Dados inválidos ou faltando.
 * @apiError (Error 409) Conflict Email já existente.
 * @apiError (Error 500) InternalServerError Falha ao criar o contato.
 *
 * @apiErrorExample {json} Erro 400:
 * HTTP/1.1 400 Bad Request
 * {
 *    "error": "Dados inválidos ou faltando."
 * }
 *
 * @apiErrorExample {json} Erro 409:
 * HTTP/1.1 409 Conflict
 * {
 *    "error": "Email já existente."
 * }
 *
 * @apiErrorExample {json} Erro 500:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "error": "Falha ao criar o contato: Mensagem de erro específica."
 * }
 */

/**
 * @api {delete} /contact/id Deletar Contato
 * @apiName Deletar Contato
 * @apiGroup Contacts
 * @apiPermission isAuthenticated
 *
 * @apiParam {String} id ID único do contato a ser deletado.
 *
 * @apiSuccess {Object} Objeto vazio
 *
 * @apiError (Error 400) BadRequest ID é obrigatório.
 * @apiError (Error 500) InternalServerError Falha ao deletar o contato.
 *
 * @apiErrorExample {json} Erro 400:
 * HTTP/1.1 400 Bad Request
 * {
 *    "error": "ID é obrigatório."
 * }
 *
 * @apiErrorExample {json} Erro 500:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "error": "Falha ao deletar o contato: Mensagem de erro específica."
 * }
 */

/**
 * @api {get} /contact/id Listar Contatos do Cliente
 * @apiName Listar Contatos do client
 * @apiGroup Contacts
 * @apiPermission isAuthenticated
 *
 * @apiParam {String} id ID único do cliente.
 *
 * @apiSuccess {String} id ID único do contato.
 * @apiSuccess {String} nomeCompleto Nome completo do contato.
 * @apiSuccess {String} email Email do contato.
 * @apiSuccess {String} telefone Número de telefone do contato.
 * @apiSuccess {String} dataRegistro Data de registro do contato.
 * @apiSuccess {String} clientId ID único do cliente associado ao contato.
 * @apiSuccess {Object[]} communications Lista de comunicações associadas ao contato.
 * @apiSuccess {Number} _count Contagem de comunicações associadas ao contato.
 *
 * @apiError (Error 500) InternalServerError Falha ao obter a lista de contatos.
 *
 * @apiErrorExample {json} Erro 500:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "error": "Falha ao obter a lista de contatos: Mensagem de erro específica."
 * }
 * @apiErrorExample {json} Erro 404:
 * HTTP/1.1 404 Not Found
 * {
 *    "error": "Usuário não encontrado."
 * }
 */

/**
 * @api {post} /com/contact  Opções de Contatos Contato
 * @apiName comunicações de Contacts
 * @apiGroup Communications
 * @apiPermission isAuthenticated
 * @description Criar Opções de Contatos para os Contacts existentes
 *
 * @apiParam {String} email Email .
 * @apiParam {String} telefone Número de telefone.
 * @apiParam {String} contactId ID único do contato a quem deseja associar.
 *
 * @apiSuccess {String} id ID único da comunicação criada.
 * @apiSuccess {String} email Email para comunicação.
 * @apiSuccess {String} telefone Número de telefone para comunicação.
 * @apiSuccess {String} dataRegistro Data de registro da comunicação.
 * @apiSuccess {String} clientId ID único do cliente associado à comunicação (pode ser nulo).
 * @apiSuccess {String} contactId ID único do contato associado à comunicação.
 *
 * @apiError (Error 400) BadRequest Dados inválidos ou faltando.
 * @apiError (Error 409) Conflict Email já existente.
 * @apiError (Error 500) InternalServerError Falha ao criar a comunicação.
 *
 * @apiErrorExample {json} Erro 400:
 * HTTP/1.1 400 Bad Request
 * {
 *    "error": "Dados inválidos ou faltando."
 * }
 *
 * @apiErrorExample {json} Erro 409:
 * HTTP/1.1 409 Conflict
 * {
 *    "error": "Email já existente."
 * }
 *
 * @apiErrorExample {json} Erro 500:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "error": "Falha ao criar a comunicação: Mensagem de erro específica."
 * }
 */

/**
 * @api {post} /communications/create Opções de Contatos Client
 * @apiName comunicações de Client
 * @apiGroup Communications
 * @apiPermission isAuthenticated
 * @description Criar Opções de Contatos para os Clients existentes
 *
 * @apiParam {String} email Email para comunicação.
 * @apiParam {String} telefone Número de telefone para comunicação.
 * @apiParam {String} ClientId ID único do Client associado à comunicação.
 *
 * @apiSuccess {String} id ID único da comunicação criada.
 * @apiSuccess {String} email Email para comunicação.
 * @apiSuccess {String} telefone Número de telefone para comunicação.
 * @apiSuccess {String} dataRegistro Data de registro da comunicação.
 * @apiSuccess {String} clientId ID único do cliente associado à comunicação.
 * @apiSuccess {String} contactId ID único do contato associado à comunicação  (pode ser nulo).
 *
 * @apiError (Error 400) BadRequest Dados inválidos ou faltando.
 * @apiError (Error 409) Conflict Email já existente.
 * @apiError (Error 500) InternalServerError Falha ao criar a comunicação.
 *
 * @apiErrorExample {json} Erro 400:
 * HTTP/1.1 400 Bad Request
 * {
 *    "error": "Dados inválidos ou faltando."
 * }
 *
 * @apiErrorExample {json} Erro 409:
 * HTTP/1.1 409 Conflict
 * {
 *    "error": "Email já existente."
 * }
 *
 * @apiErrorExample {json} Erro 500:
 * HTTP/1.1 500 Internal Server Error
 * {
 *    "error": "Falha ao criar a comunicação: Mensagem de erro específica."
 * }
 */ 