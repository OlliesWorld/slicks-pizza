import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function creatPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
}).format;
export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>
        {type.title} - {value ? formatMoney(value / 100) : ''}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(creatPatchFrom(event.target.value))}
        href={inputComponent}
      />
    </div>
  );
}

PriceInput.focus = function () {
  this.inputElement.focus();
};
