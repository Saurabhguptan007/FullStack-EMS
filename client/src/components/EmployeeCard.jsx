
const EmployeeCard = ({employee, onEdit, onDelete}) => {
  return (
    <div className="group relative card card-hover overflow-hidden">
        <div className="relative aspect-4/3 w-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-50">
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-indigo-100 to-slate-100 flex items-center justify-center">
                    <span className="text-2xl font-medium text-indigo-400">
                        {employee.firstName[0]} {employee.lastName[0]}
                    </span>
                </div>
            </div>
        </div>

        <div className="p-5">
            <h3 className="text-slate-900">{employee.firstName} {employee.lastName}</h3>
            <p className="text-xs text-slate-500">{employee.position}</p>
        </div>
    </div>
  )
}

export default EmployeeCard