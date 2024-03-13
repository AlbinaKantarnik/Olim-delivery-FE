import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

export default function Order() {
    const { id_user } = useParams();
    return (
        <div>
            <h1>Order Page</h1>
        </div>
    );
}