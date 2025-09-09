import React from 'react'

const Table = ({expenses}) => {
  return (
    <div className='table'>
        <table>
            <thead>
                <tr>
                    {
                        ["Name", "Amount", "Date"].mapp((i, index) =>{
                            <th key={index}>{i}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense) => (
                        <tr key={expense.id}>
                            {expense.name}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table