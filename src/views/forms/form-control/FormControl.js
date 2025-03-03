import React, { useState } from 'react'

const FormControl = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    shippingAddress: '',
    paymentTerms: ''
  })

  const [customers, setCustomers] = useState([])
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = 'Contact information is required'
    }
    if (!formData.shippingAddress.trim()) {
      newErrors.shippingAddress = 'Shipping address is required'
    }
    if (!formData.paymentTerms.trim()) {
      newErrors.paymentTerms = 'Payment terms are required'
    }
    return newErrors
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length === 0) {
      setCustomers(prevCustomers => [...prevCustomers, { ...formData, id: Date.now() }])
      setFormData({
        name: '',
        contactInfo: '',
        shippingAddress: '',
        paymentTerms: ''
      })
      setErrors({})
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header">
            <strong>Add New Customer</strong>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="contactInfo" className="form-label">Contact Info</label>
                <input
                  type="text"
                  className={`form-control ${errors.contactInfo ? 'is-invalid' : ''}`}
                  id="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  placeholder="Enter Contact Info"
                />
                {errors.contactInfo && <div className="invalid-feedback">{errors.contactInfo}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="shippingAddress" className="form-label">Shipping Address</label>
                <textarea
                  className={`form-control ${errors.shippingAddress ? 'is-invalid' : ''}`}
                  id="shippingAddress"
                  rows={3}
                  value={formData.shippingAddress}
                  onChange={handleChange}
                />
                {errors.shippingAddress && <div className="invalid-feedback">{errors.shippingAddress}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="paymentTerms" className="form-label">Payment Terms</label>
                <input
                  type="text"
                  className={`form-control ${errors.paymentTerms ? 'is-invalid' : ''}`}
                  id="paymentTerms"
                  value={formData.paymentTerms}
                  onChange={handleChange}
                  placeholder="Enter Payment Terms"
                />
                {errors.paymentTerms && <div className="invalid-feedback">{errors.paymentTerms}</div>}
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Customer Table */}
        <div className="card">
          <div className="card-header">
            <strong>Customer List</strong>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Contact Info</th>
                    <th>Shipping Address</th>
                    <th>Payment Terms</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(customer => (
                    <tr key={customer.id}>
                      <td>{customer.name}</td>
                      <td>{customer.contactInfo}</td>
                      <td>{customer.shippingAddress}</td>
                      <td>{customer.paymentTerms}</td>
                      <td>
                        <button 
                          className="btn btn-danger btn-sm"
                          onClick={() => setCustomers(customers.filter(c => c.id !== customer.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {customers.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center">No customers added yet</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormControl;