<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;


class ClientController extends Controller
{
    /**
     * Author: George Papanotas
     * Purpose: Get the input values from the form,
     * validate and sanizize it and store the new (or update the existing) client.
     *
     * Notes:
     * The validation is performed using the validateWithBag method
     * in order to easily keep up with any validation errors.
     *
     * The sanitization is performed using a custom middleware that parses the
     * request and performs strip_tags on every input value. The middleware
     * is located at /Http/Middleware/XssSanitizer.php
     */
    public function store(Request $request){

        $request->validateWithBag('gp_clients', [
            'SSN' => ['required', 'max:255'],
            'fullname' => ['required'],
            'occupation' => ['required'],
            'total_deposits' => ['required', 'numeric', 'min:0'],
            'total_unpaid_loans' => ['required', 'numeric', 'min:0'],
            'active_loans_number' => ['required', 'numeric', 'min:0'],
            'total_unsettled_amount' => ['required', 'numeric', 'min:0'],
        ]);

        $client = Client::updateOrCreate(
            ['SSN' => $request->SSN],
            [
                'SSN' => $request->SSN,
                'full_name' => $request->fullname,
                'occupation' => $request->occupation,
                'total_deposits' => $request->total_deposits,
                'total_unpaid_loans' => $request->total_unpaid_loans,
                'active_loans_number' => $request->active_loans_number,
                'total_unsettled_amount' => $request->total_unsettled_amount
            ]
        );
        return $client;
    }

    public function calculateRiskScore(Request $request){
        $client = Client::find($request->SSN);

        $risk = $client->calculateRisk();

        $client->risk_score = $risk;
        $client->save();

        return ['risk' => $risk, 'client' => $client];

    }

    public function calculateDynamicScore(Request $request){
        $client = Client::find($request->SSN);

        $risk = $client->calculateDynamicRisk();

        return ['risk_dynamic' => $risk, 'client' => $client];
    }
}
