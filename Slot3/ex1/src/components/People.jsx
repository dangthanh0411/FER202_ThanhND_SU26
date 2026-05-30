//Tao 1 list of object Person gom 3 phan tu:id,name,age.
//Hien thi danh sach nguoi dung trong component People ra dang danh sach
//Co danh so thu tu ten va tuoi cua nguoi dung

function People() {

    const persons = [
        { id: 1, name: "An", age: 12 },
        { id: 2, name: "Binh", age: 20 },
        { id: 3, name: "Cuong", age: 15 },
        { id: 4, name: "Dung", age: 25 },
        { id: 5, name: "Quang", age: 30 },
        { id: 6, name: "Hien", age: 17 },
        { id: 7, name: "Giang", age: 22 },
        { id: 8, name: "Tien", age: 28 },
        { id: 9, name: "Thanh", age: 19 },
        { id: 10, name: "Long", age: 16 }
    ];

    
    const teenager = persons.find(
        (person) => person.age >= 13 && person.age <= 19
    );

    
    const sortedPersons = [...persons].sort((a, b) => {
        if (a.age === b.age) {
            return a.name.localeCompare(b.name);
        }
        return a.age - b.age;
    });

    return (
        <>
            <h1>People List</h1>

            {/* Hiển thị danh sách */}
            <ol>
                {persons.map((person) => (
                    <li key={person.id}>
                        Name: {person.name} - Age: {person.age}
                    </li>
                ))}
            </ol>

            {/* Teenager đầu tiên */}
            <h2>First Teenager</h2>

            {
                teenager ? (
                    <p>
                        Name: {teenager.name} - Age: {teenager.age}
                    </p>
                ) : (
                    <p>No result</p>
                )
            }

            {/* Bảng sau khi sắp xếp */}
            <h2>Sorted Table</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {sortedPersons.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default People;