function calcularSalario() {
    var opcion = document.getElementById('opcion').value;
    var salario = parseFloat(document.getElementById('salario').value);

    var calculoSalario = salario;

    var afpPatronal = 0;
    var isssPatronal = 0;
    var isssLaboral = salario * 0.03;
    var afpLaboral = salario * 0.0725;

    var salarioAFP = salario - afpLaboral - isssLaboral;
    var SalarioAFP1 = salario - afpLaboral;

    var impuestoRenta = 0;

    if (opcion === 'mensual') {
        afpPatronal = salario * 0.0775;
        isssPatronal = salario * 0.075;
    } else if (opcion === 'quincenal') {
        afpPatronal = salario * 0.0775;
        isssPatronal = salario * 0.04688;
    } else if (opcion === 'semanal') {
        afpPatronal = salario * 0.0775;
        isssPatronal = salario * 0.0234;
    }

    // Cálculo de impuesto sobre la renta
    if (opcion === 'mensual') {
        if (salarioAFP > 0.01 && salarioAFP <= 472.00) {
            impuestoRenta = 0;
        } else if (salarioAFP > 472.01 && salarioAFP <= 895.24) {
            impuestoRenta = (salarioAFP - 472.01) * 0.10 + 17.67;
        } else if (salarioAFP > 895.25 && salarioAFP <= 2262.90) {
            impuestoRenta = (salarioAFP - 895.25) * 0.20 + 60.00;
        } else if (salarioAFP > 2262.91) {
            impuestoRenta = (salarioAFP - 2262.91) * 0.30 + 288.57;
        }
    } else if (opcion === 'quincenal') {
        if (salarioAFP > 0.01 && salarioAFP <= 236.00) {
            impuestoRenta = 0;
        } else if (salarioAFP > 236.01 && salarioAFP <= 447.62) {
            impuestoRenta = (salarioAFP - 236.01) * 0.10 + 8.83;
        } else if (salarioAFP > 447.63 && salarioAFP <= 1019.05) {
            impuestoRenta = (salarioAFP - 447.63) * 0.20 + 30.00;
        } else if (salarioAFP > 1019.06) {
            impuestoRenta = (salarioAFP - 1019.06) * 0.30 + 144.28;
        }
    } else if (opcion === 'semanal') {
        if (salarioAFP > 0.01 && salarioAFP <= 118.00) {
            impuestoRenta = 0;
        } else if (salarioAFP > 118.01 && salarioAFP <= 223.81) {
            impuestoRenta = (salarioAFP - 118.01) * 0.10 + 4.42;
        } else if (salarioAFP > 223.82 && salarioAFP <= 509.52) {
            impuestoRenta = (salarioAFP - 223.82) * 0.20 + 15.00;
        } else if (salarioAFP > 509.53) {
            impuestoRenta = (salarioAFP - 509.53) * 0.30 + 72.14;
        }
    }

    var descuentoTotal = isssLaboral + afpLaboral + impuestoRenta;
    var salarioLiquido = salario - descuentoTotal;

    document.getElementById('calculo-salario').textContent = opcion.charAt(0).toUpperCase() + opcion.slice(1);
    document.getElementById('afp-patronal').textContent = afpPatronal.toFixed(2);
    document.getElementById('isss-patronal').textContent = isssPatronal.toFixed(2);
    document.getElementById('isss-laboral').textContent = isssLaboral.toFixed(2);
    document.getElementById('afp-laboral').textContent = afpLaboral.toFixed(2);
    document.getElementById('salario-afp').textContent = SalarioAFP1.toFixed(2);
    document.getElementById('descuento-total').textContent = descuentoTotal.toFixed(2);
    document.getElementById('impuesto-renta').textContent = impuestoRenta.toFixed(2);
    document.getElementById('salario-liquido').textContent = salarioLiquido.toFixed(2);
}

function borrarDatos() {
    document.getElementById('salario').value = '';
    document.getElementById('opcion').selectedIndex = 0;
    document.getElementById('calculo-salario').textContent = '';
    document.getElementById('afp-patronal').textContent = '';
    document.getElementById('isss-patronal').textContent = '';
    document.getElementById('isss-laboral').textContent = '';
    document.getElementById('afp-laboral').textContent = '';
    document.getElementById('salario-afp').textContent = '';
    document.getElementById('descuento-total').textContent = '';
    document.getElementById('impuesto-renta').textContent = '';
    document.getElementById('salario-liquido').textContent = '';
}