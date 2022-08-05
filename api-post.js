// Api para almacenar la data en la BD utilizando método POST.

router.post('/create-register',
validateHandler(createSchema, 'body'),
  async (req, res, next) => {
    const body = await req.body
    const { nombre, usuario } = body
    try {
    const pool = await getConnection()
    const result = await pool.request()
    .input('opcion', sql.Int, 1)
    .input('nombre', sql.VarChar, nombre)
    .input('usuario', sql.VarChar, usuario)
    .execute(_storedProcedure, (err, result) => {
      if (err) {
        if (err) {
          resultado = new Responses(2009, err)
          return res.status(400).json(resultado.Payback())
        }
      }
      res.status(201).json({
        value: 1,
        response: 1,
        message: 'Registro almacenado con éxito.',
        id: result.recordset
      })
    })
    } catch (error) {
      resultado = new Responses(2009, error.message)
      return res.status(400).json(resultado.Payback())
    }
})