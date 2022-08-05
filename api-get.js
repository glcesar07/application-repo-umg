// Api para obtener la data por medio del método GET.
router.get(('/get-data'), async (req, res, next) => {
    try {
      const pool = await getConnection()
      const result = await pool.request()
      .input('opcion', sql.Int, 4)
      .execute(_storedProcedure, (err, result) => {
  
        if (err) {
          resultado = new Responses(1002, err)
          res.status(400).json(resultado.Payback())
        }
  
        if (result.recordset <= 0) {
          resultado = new Responses(2009, null)
          return res.status(400).json(resultado.Payback())
        }
  
        res.status(200).json({
          value: 1,
          response: 1,
          message: 'Registros encontrados con éxito.',
          data: result.recordset
        })
      })
    } catch (error) {
      resultado = new Responses(2009, error.message)
      return res.status(400).json(resultado.Payback())
    }
  })
  