import React, { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Container } from "@mui/system"
import { Paper } from "@mui/material"
import Button from "@mui/material/Button"

const Student = () => {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" }
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")

  const clickSubmit = (e) => {
    e.preventDefault()
    const student = { name, address }
    console.log(student)
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => console.log(JSON.stringify(student)))
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue", textAlign: "center" }}>Add Student</h1>

        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='Studen Name'
            variant='outlined'
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id='outlined-basic'
            label='Student Address'
            variant='outlined'
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant='contained' color='secondary' onClick={clickSubmit}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Student
