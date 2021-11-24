// Add your JS code here
const templateSelector = "[data-target]:not([data-target=''])";
const MONTH_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

// ----------------- Utils function -----------------
function padNumber(a, padSize) {
    return String(10 ** padSize + a).slice(-padSize);
}

/**
 *
 * @param {Element} root
 * @param {Record<string, string>} data
 */
function renderTemplate(root, data) {
    /**
     *
     * @param {Element} node
     */
    function fillDataToNode(node) {
        const target = node.getAttribute("data-target");
        node.innerText = data[target];
    }
    root.querySelectorAll(templateSelector).forEach(fillDataToNode);
}

function render(data) {
    renderTemplate(document.getElementById("metadata"), {
        studentName: data.recipient.name,
        studentId: data.recipient.studentId,
        programTitle: data.name,
        programSchedule: data.additionalData.extra.programmeScheduleNo,
    });

    // Render grade table
    {
        const gradeTable = document.getElementById("grade-table-body");
        const gradeRowTemplate = document.getElementById("grade-row-tpl");
        for (const grade of data.transcript) {
            const newRow = gradeRowTemplate.content.cloneNode(true);
            renderTemplate(newRow, {
                sin: grade.SIN,
                startDate: grade.startDate,
                endDate: grade.endDate,
                moduleTitle: grade.name,
                grade: grade.grade,
            });
            gradeTable.appendChild(newRow);
        }
    }

    // Render date of issue
    {
        const date = new Date(data.issuedOn);
        const day = padNumber(date.getDate() + 1, 2);
        const month = MONTH_NAMES[date.getMonth()];
        const year = date.getFullYear();
        const issuedOn = `${day}-${month}-${year}`;
        renderTemplate(document.getElementById("date-of-issue"), {
            issuedOn,
        });
    
    }
}

fetch("/json/sample_data.json")
    .then((res) => res.json())
    .then(render);
