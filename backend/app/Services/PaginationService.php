<?php

namespace App\Services;

class PaginationService
{
    public function transform($data)
    {
        $data = json_decode(json_encode($data));

        return [
            'data' => $data->data,
            'page' => $data->current_page,
            'perPage' => $data->per_page,
            'total' => $data->total
        ];
    }
}
