async function generateWord() {
    const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType } = window.docx;
    

    const surname = document.getElementById('surname').value;
    const name = document.getElementById('name').value;
    const patronymic = document.getElementById('patronymic').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const birthdate = document.getElementById('birthdate').value;
    const issueDate = document.getElementById('issueDate').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const issuingAuthority = document.getElementById('issuingAuthority').value;
    const personalNumber = document.getElementById('personalNumber').value;
    const docNumber = document.getElementById('docNumber').value;
    const Photooftheowner = document.getElementById('Photooftheowner').value;
    const Signature = document.getElementById('Signature').value;
    const PlaceofResidence = document.getElementById('PlaceofResidence').value;
    const Categories = document.getElementById('Categories').value;
    const CategoryIssueDate = document.getElementById('CategoryIssueDate').value;
    const CategoryValidityPeriod = document.getElementById('CategoryValidityPeriod').value;
    const CategoryB = document.getElementById('CategoryB').value;
    const CategoryIssueDateB = document.getElementById('CategoryIssueDateB').value;
    const CategoryValidityPeriodB = document.getElementById('CategoryValidityPeriodB').value;
    const CategoryC = document.getElementById('CategoryC').value;
    const CategoryIssueDateC = document.getElementById('CategoryIssueDateC').value;
    const CategoryValidityPeriodC = document.getElementById('CategoryValidityPeriodC').value;
    const CategoryD = document.getElementById('CategoryD').value;
    const CategoryIssueDateD = document.getElementById('CategoryIssueDateD').value;
    const CategoryValidityPeriodD = document.getElementById('CategoryValidityPeriodD').value;
    const CategoryBE = document.getElementById('CategoryBE').value;
    const CategoryIssueDateBE = document.getElementById('CategoryIssueDateBE').value;
    const CategoryValidityPeriodBE = document.getElementById('CategoryValidityPeriodBE').value;
    const CategoryCE = document.getElementById('CategoryCE').value;
    const CategoryIssueDateCE = document.getElementById('CategoryIssueDateCE').value;
    const CategoryValidityPeriodCE = document.getElementById('CategoryValidityPeriodCE').value;
    const CategoryDE = document.getElementById('CategoryDE').value;
    const CategoryIssueDateDE = document.getElementById('CategoryIssueDateDE').value;
    const CategoryValidityPeriodDE = document.getElementById('CategoryValidityPeriodDE').value;
    const CategoriesABC = document.getElementById('CategoriesABC').value;
    const numberDL = document.getElementById('numberDL').value;
    const ForSpecialNotes = document.getElementById('ForSpecialNotes').value;
    const Additionalinformationforeachcategory = document.getElementById('Additionalinformationforeachcategory').value;
    const translator = document.getElementById('translator').value;

    
    const table = new Table({
        columnWidths: [3000, 4000, 4000], // Ширина колонок
        rows: [
// Фамилия  
            new TableRow({ 
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: " 1.Фамилия / Фамилия", italic: true, size:16 }), // Изменяем размер на 24 пункта
                                ],
                            }),
                        ],
                        width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: "left",
                                children: [
                                    new TextRun({ text: surname, bold: true, size: 20 }), // Изменяем размер текста на 18 пунктов
                                ],
                            }),
                        ],
                        width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({ text: " РЕСПУБЛИКА КАРАКАЛПАКСТАН", italic: true, size:16 }), // Изменяем размер текста на 16 пунктов
                                ],
                            }),
                        ],
                        width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
                ],
            }),
 // Фамилия            

 // Имя
 new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        
                        new TextRun({ text: "2.Имя/Имя", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: name, bold: true, size: 20 }), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "АНДИЖАНСКАЯ ОБЛАСТЬ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),
// Имя

// отчество 
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "Отчество/Отчество", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: patronymic, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "БУХАРСКАЯ ОБЛАСТЬ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),
// отчество 

// место рождения 
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "3.Место рождения/Место рождения", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: birthPlace, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "ДЖИЗАКСКАЯ ОБЛАСТЬ ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),
// место рождения 
// дата рождения 
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "Дата рождения/дата рождения", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: birthdate, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "КАШКАДАРЬИНСКАЯ ОБЛАСТЬ ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),
// дата рождения


// дата выдачи
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "4а. Дата выдачи / Дата выдачи", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: issueDate, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "НАВОИЙСКАЯ ОБЛАСТЬ ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),

// дата выдачи
// Действительно до
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "4б. Действительно до / Действительно до", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: expiryDate, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "НАМАНГАНСКАЯ ОБЛАСТЬ ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),
// Действительно до

// Кем выдан
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "4б. Кем выдан /  Кем выдан", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: issuingAuthority, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "САМАРКАНДСКАЯ ОБЛАСТЬ ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),

// Кем выдан

// пин код
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "4д.ПИН ФЛ/ПИН ФЛ", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: personalNumber, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "СЫРДАРЬИНСКАЯ ОБЛАСТЬ ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),
// пин код

// Номер удостоверения
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "5. Номер удостоверения / Номер удостоверения", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: docNumber, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "СУРХАРДАРЬИНСКАЯ ОБЛАСТЬ ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),

// Номер удостоверения

// Фото владельца
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "6. Фото владельца / Фото владельца", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "center",
                    children: [
                        new TextRun({ text: Photooftheowner, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "ТАШКЕНТСКАЯ ОБЛАСТЬ ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),
// Фото владельца

// подпись владелца
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "7. Подпись / Подпись ", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "center",
                    children: [
                        new TextRun({ text: Signature, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "ФЕРГАНСКАЯ ОБЛАСТЬ ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),
// подпись владелца


// место проживания
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "8. Место проживания / Место проживания", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: PlaceofResidence, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "ХОРЕЗМСКАЯ ОБЛАСТЬ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),
// место проживания

// КАТ ABC
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "9. Категории / Категории", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "center",
                    children: [
                        new TextRun({ text: CategoriesABC, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "ГОРОД ТАШКЕНТ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),
// КАТ ABC 

// DL
new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "номер-DL", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: numberDL, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: " ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),

// DL



new TableRow({
    children: [
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "9. Категории / Категории", bold: true, size: 16 }), // Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),


        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "10.Дата выдачи разрешения для каждой категории /Дата выдачи разрешения для каждой категории", bold: true, size: 16 }), //Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),

        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "11. Срок действия разрешения для каждой категории /Срок действия разрешения для каждой категории", bold: true, size: 16 }), //Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
],
}),


// категории 
new TableRow({
    children: [
        new TableCell({
            children: [
            new Paragraph({
                alignment: "center",
                children: [new TextRun({ text: Categories, italic: true, size:20 })],
            }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
                children: [
                new Paragraph({
                    alignment: "left",
                    children: [new TextRun({ text: CategoryIssueDate, italic: true, size:20 })],
                }),
                ],
                width: { size: 33, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                    children: [
                    new Paragraph({
                        alignment: "left",
                        children: [new TextRun({ text: CategoryValidityPeriod, italic: true, size:20 })],
                    }),
                    ],
                    width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
],
}),

new TableRow({
    children: [
        new TableCell({
            children: [
            new Paragraph({
                alignment: "center",
                children: [new TextRun({ text: CategoryB, italic: true, size:20 })],
            }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
                children: [
                new Paragraph({
                    alignment: "left",
                    children: [new TextRun({ text: CategoryIssueDateB, italic: true, size:20 })],
                }),
                ],
                width: { size: 33, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                    children: [
                    new Paragraph({
                        alignment: "left",
                        children: [new TextRun({ text: CategoryValidityPeriodB, italic: true, size:20 })],
                    }),
                    ],
                    width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
],
}),

new TableRow({
    children: [
        new TableCell({
            children: [
            new Paragraph({
                alignment: "center",
                children: [new TextRun({ text: CategoryC, italic: true, size:20 })],
            }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
                children: [
                new Paragraph({
                    alignment: "left",
                    children: [new TextRun({ text: CategoryIssueDateC, italic: true, size:20 })],
                }),
                ],
                width: { size: 33, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                    children: [
                    new Paragraph({
                        alignment: "left",
                        children: [new TextRun({ text: CategoryValidityPeriodC, italic: true, size:20 })],
                    }),
                    ],
                    width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
],
}),

new TableRow({
    children: [
        new TableCell({
            children: [
            new Paragraph({
                alignment: "center",
                children: [new TextRun({ text: CategoryD, italic: true, size:20 })],
            }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
                children: [
                new Paragraph({
                    alignment: "left",
                    children: [new TextRun({ text: CategoryIssueDateD, italic: true, size:20 })],
                }),
                ],
                width: { size: 33, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                    children: [
                    new Paragraph({
                        alignment: "left",
                        children: [new TextRun({ text: CategoryValidityPeriodD, italic: true, size:20 })],
                    }),
                    ],
                    width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
],
}),

new TableRow({
    children: [
        new TableCell({
            children: [
            new Paragraph({
                alignment: "center",
                children: [new TextRun({ text: CategoryBE, italic: true, size:20 })],
            }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
                children: [
                new Paragraph({
                    alignment: "left",
                    children: [new TextRun({ text: CategoryIssueDateBE, italic: true, size:20 })],
                }),
                ],
                width: { size: 33, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                    children: [
                    new Paragraph({
                        alignment: "left",
                        children: [new TextRun({ text: CategoryValidityPeriodBE, italic: true, size:20 })],
                    }),
                    ],
                    width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
],
}),

new TableRow({
    children: [
        new TableCell({
            children: [
            new Paragraph({
                alignment: "center",
                children: [new TextRun({ text: CategoryCE, italic: true, size:20 })],
            }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
                children: [
                new Paragraph({
                    alignment: "left",
                    children: [new TextRun({ text: CategoryIssueDateCE, italic: true, size:20 })],
                }),
                ],
                width: { size: 33, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                    children: [
                    new Paragraph({
                        alignment: "left",
                        children: [new TextRun({ text: CategoryValidityPeriodCE, italic: true, size:20 })],
                    }),
                    ],
                    width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
],
}),

new TableRow({
    children: [
        new TableCell({
            children: [
            new Paragraph({
                alignment: "center",
                children: [new TextRun({ text: CategoryDE, italic: true, size:20 })],
            }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
                children: [
                new Paragraph({
                    alignment: "left",
                    children: [new TextRun({ text: CategoryIssueDateDE, italic: true, size:20 })],
                }),
                ],
                width: { size: 33, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                    children: [
                    new Paragraph({
                        alignment: "left",
                        children: [new TextRun({ text: CategoryValidityPeriodDE, italic: true, size:20 })],
                    }),
                    ],
                    width: { size: 33, type: WidthType.PERCENTAGE },
                    }),
],
}),
// стоп котигории

new TableRow({
    children: [

        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "12. Дополнительные сведения по каждой категории/Дополнительные сведения по каждой категории", bold: true, size: 16 }), //Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),


        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: Additionalinformationforeachcategory, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: " ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),


new TableRow({
    children: [

        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: "Для особых отметок/Для особых отметок", bold: true, size: 16 }), //Изменяем размер на 24 пункта
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),


        new TableCell({
            children: [
                new Paragraph({
                    alignment: "left",
                    children: [
                        new TextRun({ text: ForSpecialNotes, bold: true, size: 20}), // Изменяем размер текста на 18 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({ text: " ", size: 16 }), // Изменяем размер текста на 16 пунктов
                    ],
                }),
            ],
            width: { size: 33, type: WidthType.PERCENTAGE },
        }),
    ],
}),


   




// Функция для изменения стиля выпадающего списка и полей ввода даты


// Применяем стили при загрузке страницы




//категории

//КАТЕГОРИИ2 






            
            // Добавляйте остальные строки аналогично
        ],






    });



//проверка 


    const doc = new Document({
        sections: [
            {
                children: [
                    new Paragraph({
                        alignment: "right",
                        children: [new TextRun({ text: "Перевод с узбекского и английского языков на русский язык", size: 20,
                        italic: true })],
                        
                    }),
                    new Paragraph({
                        children: [new TextRun({ text:" ", size: 20  })],
                        
                    }),
                    new Paragraph({
                        alignment: "center",
                        children: [new TextRun({ text: "РЕСПУБЛИКА УЗБЕКИСТАН / РЕСПУБЛИКА УЗБЕКИСТАН",bold: true, size: 24 })],                      
                    }),
                    new Paragraph({
                        alignment: "center",
                        children: [new TextRun({ text: "ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ / ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ",bold: true, size: 20 })],                      
                    }),
                  
                    new Paragraph({
                        children: [new TextRun({ text:" ", size: 20               })],
                        
                    }),

                    table, // Вставляем таблицу
                ],
            },
        ],
    });

    try {
        const blob = await Packer.toBlob(doc);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "ID-карта.docx";
        a.click();
        URL.revokeObjectURL(url);
    } catch (error) {console.error("Ошибка:", error);
    alert("Произошла ошибка при создании документа.");
}
}